import { useState } from 'react';
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
  const [maxRevisions, setMaxRevisions] = useState(3);
  
  const [currentPlan, setCurrentPlan] = useState('');
  const [researchResults, setResearchResults] = useState('');
  const [draft, setDraft] = useState('');
  const [critique, setCritique] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
  const COLAB_URL = process.env.REACT_APP_COLAB_URL;
  
  try {
    const response = await fetch(`${COLAB_URL}/webhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: prompt,
        config: { max_revisions: maxRevisions }
      }),
    });
    
    const result = await response.json();
    console.log('✅ Colab says:', result);
  } catch (error) {
    console.error('❌ Error:', error);
  }
};
  const startGeneration = () => {
    if (!topic.trim()) return;
    setIsLoading(true);
    setStep(2);
    handleSubmit();
    setTimeout(() => {
      setCurrentPlan("1. Introduction\n2. Benefits of AI in Education\n3. Challenges and Risks\n4. Case Studies\n5. Future Outlook");
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="ai-essay-studio">
      <Header />

      <div className="main-layout">
        <Sidebar currentStep={step} />

        <div className="content-area">
          {step === 1 && (
            <InputPanel 
              topic={topic}
              setTopic={setTopic}
              maxRevisions={maxRevisions}
              setMaxRevisions={setMaxRevisions}
              onStart={startGeneration}
            />
          )}

          {step === 2 && (
            <PlanPanel 
              plan={currentPlan}
              setPlan={setCurrentPlan}
              onApprove={() => setStep(3)}
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