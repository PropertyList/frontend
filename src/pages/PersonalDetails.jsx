import { useState } from "react";
import AddressDetails from "../components/AddressDetails";
import IdentityDetails from "../components/IdentityDetails";
import { useParams } from "react-router-dom";
const PersonalDetails = () => {
  let { id } = useParams();
  const [showIdentityDetails, setShowIdentityDetails] = useState(false);
  // const [showAddressDetails, setShowAddressDetails] = useState(true)
  return (
    <div>
      {showIdentityDetails ? (
        <IdentityDetails
          setShowIdentityDetails={setShowIdentityDetails}
          userid={id}
        />
      ) : (
        <AddressDetails setShowIdentityDetails={setShowIdentityDetails} />
      )}
    </div>
  );
};

export default PersonalDetails;
