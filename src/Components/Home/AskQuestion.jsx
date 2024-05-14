

const AskQuestion = () => {
     return (
          <div className="mt-6 mb-8">
               <section className="dark:bg-gray-300 dark:text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                         <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                         <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                         <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                              <details open="">
                                   <summary className="py-2 outline-none cursor-pointer focus:underline">What are the key benefits of implementing a food sharing program in a community?</summary>
                                   <div className="px-4 pb-4">
                                        <p> Implementing a food sharing program can provide various benefits such as reducing food waste, addressing food insecurity, fostering social connections, and promoting sustainability by redistributing surplus food to those in need.</p>
                                   </div>
                              </details>
                              <details>
                                   <summary className="py-2 outline-none cursor-pointer focus:underline">How can individuals contribute to food sharing initiatives in their local communities?</summary>
                                   <div className="px-4 pb-4">
                                        <p>Individuals can contribute to food sharing initiatives by donating surplus food items, volunteering their time at local food banks or community kitchens.</p>
                                   </div>
                              </details>
                              <details>
                                   <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                                   <div className="px-4 pb-4 space-y-2">
                                        <p>What challenges do food sharing programs commonly face, and how can they be addressed</p>
                                        <p>Common challenges faced by food sharing programs include logistical issues such as transportation and storage.</p>
                                   </div>
                              </details>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default AskQuestion;