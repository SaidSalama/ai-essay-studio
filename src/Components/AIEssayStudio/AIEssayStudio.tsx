import { useState,useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import InputPanel from '../InputPanel/InputPanel';
import PlanPanel from '../PlanPanel/PlanPanel';
import ResearchPanel from '../ResearchPanel/ResearchPanel';
import DraftPanel from '../DraftPanel/DraftPanel';
import './AIEssayStudio.css';

const AIEssayStudio = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  
  const [topic, setTopic] = useState('');
  const [maxRevisions, setMaxRevisions] = useState(2);
  
  const [currentPlan, setCurrentPlan] = useState('');
  const [researchResults, setResearchResults] = useState<string[]>([]);
  const [draft, setDraft] = useState('');
  const [critique, setCritique] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isWaitingForAI, setIsWaitingForAI] = useState(false);
  const[ThreadId,setThreadId]=useState('');

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setStep(4);
      }, 5000); // Change to 3000 for 3 seconds, etc.

      return () => clearTimeout(timer);
    }
  }, [step]);

  const Colab=process.env.REACT_APP_COLAB_URL;
  const handleSubmit = async () => {
  if (!topic.trim()) return;

  setIsWaitingForAI(true);        // ← Start loading animation

  try {
    const response = await fetch(`${Colab}/webhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: topic,
        max_revisions: maxRevisions 
      }),
    });
    
    const result = await response.json();
    console.log('✅ Colab says:', result);

    setCurrentPlan(result.plan || "No plan received");
    setThreadId(result.thread_id);
    setStep(2);               // Move to step 2
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    setIsWaitingForAI(false);      // ← Stop loading
  }
};
 
const handleContinueGeneration = async () => {
  try {
    const response = await fetch(`${Colab}//continue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        thread_id: ThreadId,  // Use the thread_id from the first response
        approval: true
      }),
    });
    
    const result = await response.json();
    console.log('✅ Colab says:', result);
     {
      setResearchResults(result.research);
      setDraft(result.draft);
      setStep(3); 
      
    }
    
    return result;
  } catch (error) {
    console.error('Error continuing graph:', error);
  }
};

  return (
    <div className="ai-essay-studio">
      <Header />

      <div className="main-layout">
        <Sidebar currentStep={step} />

        <div className="content-area">
          {step === 1 && (
  <>
    <InputPanel 
      topic={topic}
      setTopic={setTopic}
      maxRevisions={maxRevisions}
      setMaxRevisions={setMaxRevisions}
      onStart={handleSubmit}
    />

    {isWaitingForAI && (
      <div className="loading-overlay">
        <div className="ai-loading">
          <div className="spinner"></div>
          <p>AI is thinking and planning your essay...</p>
        </div>
      </div>
    )}
  </>
)}

          {step === 2 && (
            <PlanPanel 
              plan={currentPlan}
              setPlan={setCurrentPlan}
              onApprove={() => handleContinueGeneration()}
            />
          )}

          {step === 3 && <ResearchPanel research={researchResults} />}
          {step === 4 && <DraftPanel draft={draft} />}
          {step === 5 && <div>Critique Panel Coming Soon</div>}
        </div>
      </div>
    </div>
  );
};

export default AIEssayStudio;