<div className="flex flex-col m-10 max-w-[220px] justify-evenly itmes-center gap-16">
<div className=" flex flex-col gap-4 justify-between">
  <h1 className="text-sm font-medium text-left flex items-center gap-2">
    <HeartHandshake /> Report an Emergency
  </h1>
  <p className="text-[14px] font-semibold text-slate-400">
    Quickly report an injured or distressed animal in your area to
    connect with local shelters, clinics, and NGOs for immediate
    assistance
  </p>
</div>
<div className="flex flex-col gap-4 justify-between">
  {tabs.map((tab, index) => (
    <NormalButton
      key={index}
      icon={tab.icon}
      label={tab.label}
      className={`w-[250px] h-[40px] hover:bg-white ${
        tab.label === selectedTab ? "bg-[#EFF0F1]" : "bg-white"
      } text-[#3B3B3B]
         border-[#D9D9D9] text-[14px] flex justify-start pl-4 shadow-none`}
      onClick={() => handleClick(tab.label)} // Pass function reference
    >
      {tab.label}
    </NormalButton>
  ))}
</div>
<div className=" max-w-[200px] flex flex-col gap-2">
  <p className="text-[12px]">Step 1 of 5</p>
  <Progress value={20} />
</div>
</div>