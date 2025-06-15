import { useParams } from "react-router-dom";

const IssueDetails = () => {
    const {projectId,issueId}=useParams();
  return <div>IssueDetails</div>;
};

export default IssueDetails;

