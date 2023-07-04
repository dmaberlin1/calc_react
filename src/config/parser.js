const cheerio=require('cheerio'),
    axios=require('axios'),
    url='https://bank.gov.ua/ua/markets/exchangerates';

const getData=async(currency)=>{
    const array=[]
    const response=await axios.get(url);
    const $=await cheerio.load(response.data)
    const regex=new RegExp(currency)
    $('tr').each((e,i)=>{
        if ($(i).text().match(regex)) {
            $(i).children().each((e,x)=>array.push($(x).html()))
        }
    })
    return array[4];
}
export default getData;