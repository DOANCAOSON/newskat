const APIFake = [
    {
      id: "1",
      btn: "Button 1",
    },
    {
      id: "2",
      btn: "Button 2",
    },
    {
      id: "3",
      btn: "Button 3",
    },
  ];
  
  const itembtn = [
    {
      id: "1",
      div: "",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
    },
    {
      id: "2",
      div: "",
      title: "Lorem ipsum1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
    },
    {
      id: "3",
      div: "",
      title: "Lorem ipsum1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
    },
  ];

const StoreChain = ({selectedItem , handleItemClick}) => {
  return (
    <div className="mt-[96px] flex justify-center text-text-#0000">
          <div className="w-[1200px] h-[auto] pb-[78px] ">
            <div>
              <div className="flex">
                <div className="m-auto w-[100%]">
                  <div className="mb-[67px]">
                    <h1 className="text-4xl">
                      Hệ thống cửa hàng
                    </h1>
                  </div>
                  <div className="flex justify-end gap-[13px] mb-[20px]">
                    {APIFake.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor:
                            selectedItem === index
                              ? "#A82825"
                              : "#FFFFFF",
                          cursor: "pointer",
                          color:
                            selectedItem === index
                              ? "#FFFFFF"
                              : "#888888",
                          border:
                            selectedItem === index
                              ? "none"
                              : "1px solid #888888",
                        }}
                        className="px-[32px] py-[12px] rounded-full "
                        onClick={() =>
                          handleItemClick(index)
                        }
                      >
                        {item.btn}
                      </div>
                    ))}
                  </div>
                  <div>
                    {itembtn.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-[46px]  mb-[21px]"
                      >
                        <div className="w-[279px] h-[135px] bg-themtest"></div>
                        <div className="text-left w-[100%] pl-[46px] pt-[23px] bg-themtest">
                          <div>{item.title}</div>
                          <div className="w-[422px]">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default StoreChain