function StatsDataRow({
  dataName,
  dataValue,
  dataNode,
}: {
  dataName: string;
  dataValue?: string;
  dataNode?: React.ReactNode;
}) {
  return (
    <div className="h-1/5 flex justify-between border-b py-3 items-center">
      <h2 className="text-gray-500">{dataName}</h2>
      {!dataNode && (
        <h2 className="text-gray-900 font-semibold text-end">{dataValue}</h2>
      )}
      {dataNode && dataNode}
    </div>
  );
}

export default StatsDataRow;
