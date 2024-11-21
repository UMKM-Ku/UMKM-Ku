import DetailLender from "@/views/pages/lender-view/detail-view/detail-lender";

export default function DetailMarketplace({
  params,
}: {
  params: { id: number };
}) {
  return (
    <>
      <DetailLender params={params} />
    </>
  );
}
