import React from "react";
import DonorContactCard from "./ContactCard";

export default function Contact() {
  return (
    <div>
      <DonorContactCard
        name="John Smith"
        initials="JS"
        bloodGroup="A+"
        status="Responded"
        location="Brooklyn, NY"
        contactedDate="November 27, 2025"
        message="I'm available to donate. Please let me know the details."
        phone="+1 (555) 123-4567"
      />
    </div>
  );
}
