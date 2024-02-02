
import React from "react";
import Womco from "../assets/wockups/Adsız tasarım.png"

function Hakkinda() {
    return (
        <div>

            <div className='grid grid-cols-2  gap-4 flex justify-center items-center   m-10 mt-11 max-sm:grid-cols-1 max-sm:m-4 max-md:grid-cols-1
             max-md:m-3 max-lg:m-1 gap-4'>

                <div>
                    <img className='w-full   h-auto rounded-md' src={Womco} alt="" />

                </div>
                <div className="text-xl max-sm:text-l font-sans text-yz2 pl-8 max-sm:pl-2 max-md:pl-4 max-sm:pr-4 max-lg:text-lg text-left" >
                    <h1 className="pr-3 pb-8 font-bold text-center text-yz">HAKKIMIZDA</h1>
                    <p >Womco Butik Otel, konuklarına benzersiz bir konaklama deneyimi sunmak için tasarlandı. Her ayrıntısı özenle düşünülmüş bu özel
                        otelde, rahatlık, zarafet ve sıcak bir atmosfer bulacaksınız.</p> <br />
                    <p>Womco Butik Otel, zarafetin ve huzurun birleşim noktasıdır. Her oda, özel tasarlanmış mobilyalar ve konforlu yataklar ile donatılmıştır. Misafirlerimizin ihtiyaçlarına uygun olarak düzenlenen
                        odalar, modern olanaklarla geleneksel dokunuşu birleştirir.</p> <br />
                    <p>Womco Butik Otel, konukseverliği bir yaşam tarzı olarak benimser. Sizlere unutulmaz anlar yaşatmak için buradayız. Misafir memnuniyeti, bizim için her şeyden önce gelir.

                        Womco Butik Otel, kendine özgü atmosferi, özenle seçilmiş detayları ve kaliteli hizmeti ile sizleri bekliyor. Bizimle birlikte unutulmaz bir konaklama deneyimi yaşamak için hemen rezervasyon yapın ve sıcaklığımızı hissedin. </p>
                </div>



            </div>




          
        </div>
    );
}
export default Hakkinda