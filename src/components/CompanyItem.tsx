import { useState } from "react";
import { CompanyType } from "../utils/contants";

interface CompanyItemProps {
  company: CompanyType;
  defaultVisibility: boolean;
}

const CompanyItem = ({ company, defaultVisibility }: CompanyItemProps) => {
 const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
};

export default CompanyItem;
