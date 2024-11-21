"use client";
import MarketplaceLender from "@/views/pages/lender-view/marketplace-view/marketplace-lender";
import ReduxProvider from "@/views/_stores/redux-provider";
export default function Marketplace() {
  return (
    <>
      <ReduxProvider>
        <MarketplaceLender />
      </ReduxProvider>
    </>
  );
}
