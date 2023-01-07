import { useState } from "react";
import AddressDetails from "../components/AddressDetails";
import IdentityDetails from "../components/IdentityDetails";
const PersonalDetails = () => {
  const [showIdentityDetails, setShowIdentityDetails] = useState(false);
  // const [showAddressDetails, setShowAddressDetails] = useState(true)
  return (
    <div>
      {showIdentityDetails ? (
        <IdentityDetails setShowIdentityDetails={setShowIdentityDetails} />
      ) : (
        <AddressDetails setShowIdentityDetails={setShowIdentityDetails} />
      )}
    </div>
  );
};

export default PersonalDetails;
