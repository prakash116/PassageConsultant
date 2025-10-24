import "../styles/VisaCategoryHeader.css"
import { useParams } from 'react-router-dom';

const VisaCategoryHeader = () => {
  const { visaTitle } = useParams();
  return (
    <div className="visa-category-header">
      <div className="container">
                                    
        <h1>{decodeURIComponent(visaTitle)}</h1>        
      </div>
    </div>
  );
};

export default VisaCategoryHeader;