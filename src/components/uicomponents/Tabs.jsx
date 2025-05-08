import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Tab = ({ className, tab1, tab2, tab1Content, tab2Content }) => (
  <Tabs defaultValue="Manually enter location" className={className}>
    <TabsList className="w-[450px]">
      <TabsTrigger className="text-[14px] w-[200px]" value={tab1}>
        {tab1}
      </TabsTrigger>
      <TabsTrigger className="text-[14px] w-[200px]" value={tab2}>
        {tab2}
      </TabsTrigger>
    </TabsList>
    <TabsContent value={tab1}>{tab1Content}</TabsContent>
    <TabsContent value={tab2}>{tab2Content}</TabsContent>
  </Tabs>
);

export default Tab;
