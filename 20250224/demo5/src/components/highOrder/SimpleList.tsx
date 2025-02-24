/* eslint-disable @typescript-eslint/no-explicit-any */
function SimpleList({ items }: { items: [] }) {
  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((item: any, i) => (
          <div key={i}>
            <span>
              {Object.entries(item).reduce(
                (a, c: any) => (a += ` ${c[1]}`),
                ""
              )}
            </span>
            <br />
          </div>
        ))}
    </>
  );
}

export default SimpleList;
