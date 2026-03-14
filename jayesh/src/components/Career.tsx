import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>Symbiosis Institute of Geoinformatics</h5>
              </div>
              <h3>May 2025 - Aug 2025</h3>
            </div>
            <p>
              Built an end-to-end machine learning pipeline on MIMIC-IV
              healthcare data to predict patient mortality and hospital length
              of stay, improving predictive accuracy by 7% using Logistic
              Regression, Random Forest, and XGBoost.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>FlatZ - AI Community Platform</h5>
              </div>
              <h3>Sep 2025 - Nov 2025</h3>
            </div>
            <p>
              Built AI-backed community workflows with FastAPI and PostgreSQL,
              including LLM-based intent classification, visitor approvals,
              QR-based entry, and maintenance query features used by 1000+
              residents across multiple communities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Aditya Birla Group - UltraTech Cement</h5>
              </div>
              <h3>Jan 2026 - Apr 2026</h3>
            </div>
            <p>
              Developed SkillSpotter (AI HR analytics and CV screening) with
              Azure Cosmos DB, Azure Blob Storage, and Azure AI Search for
              semantic retrieval on 10,000+ CVs, and optimized the stack by
              migrating GPT-4o workflows to GPT-5 for lower latency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
