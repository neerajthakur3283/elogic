import React from "react";
import CardApps from "./_components/CardApps";
import PageBanner from "./_components/PageBanner";
import YouAre from "./_components/YouAre";
import Industries from "./_components/Industries";
import HardwareEcosystem from "./_components/HardwareEcosystem";
import OurProcess from "./_components/OurProcess";

function page() {
  return (
    <>
      <PageBanner />
      <CardApps />
      <Industries />
      <YouAre />
      <HardwareEcosystem />
      <OurProcess />
    </>
  );
}

export default page;
