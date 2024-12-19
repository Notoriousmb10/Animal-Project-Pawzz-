<div className="flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 px-4 py-3">
                  <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
                    Upload Images
                  </h1>
                  <p className="font-bold text-left text-[12px]  flex items-center text-slate-400 ">
                    "Attach clear images of the injured animal and its
                    surroundings. <br /> This will allow our team to assess the
                    situation accurately and take appropriate actions.
                  </p>
                </div>
                <div
                  className="flex items-center justify-center flex-col gap-4"
                  title="Upload from device"
                >
                  <NormalButton
                    icon={<ImageUp />}
                    className={
                      "bg-[#EFF0F1] h-[38] w-[300] text-[#3B3B3B] border-[#D9D9D9] text-[12px] shadow-sm border hover:bg-white"
                    }
                    label={"Supporting Images"}
                  />
                </div>
                <div>
                  <DragAndDropUpload
                    photoRemovalStatus={photoRemoval}
                    setPhotoRemovalStatus={(value) => setPhotoRemoval(value)}
                  />
                </div>
              </div>
              <div className="relative left-[400px] top-16">
                <NormalButton
                  label={"Delete Photos"}
                  onClick={deletePhotos}
                  className="text-[14px] rounded-[5] h-8"
                />
                <NormalButton
                  label={"Next"}
                  className="text-[14px] rounded-[5] h-8"
                />
              </div>
            </div>