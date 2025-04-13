import React from "react";

export const RelatedProduct = () => {
    const relatedData = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__',
            title: 'Osmot',
            amount: 13,
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__',
            title: 'Osmot',
            amount: 13,
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__',
            title: 'Osmot',
            amount: 13,
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__',
            title: 'Osmot',
            amount: 13,
        }
    ]
    return <div className="flex flex-col gap-8 w-[88%] mx-auto text-white">
        <h2 className="mt-6font-chango text-[26px]">Related Products</h2>
        <div className="grid grid-cols-4 justify-center text-center gap-4 max-lg:grid-cols-2 max-sm:grid-cols-2 mb-8 lg:mb-16">
            {relatedData.map((data, index) => {
                return <div key={index} className="border-[#353535] border-[1px] p-2 font-cinzel flex flex-col gap-2 items-center">
                    <img className="w-[100%]" src={data.img} alt="Alt title" />
                    <h3 className="">{data.title}</h3>
                    <p className="text-[20px] font-400">${data.amount}</p>
                    <button className="p-2 border-[#fff] border-[1px] text-xl mt-2">Add To Cart</button>
                </div>
            })}
        </div>
    </div>
}