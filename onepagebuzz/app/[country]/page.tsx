import { useRouter } from 'next/navigation';
import languagesData from '../resources/json/languages.json';
import countryName from '../resources/json/countryNames.json';

export function generateStaticParams() {
  return Object.keys(languagesData).map((country: any) => ({ country: country }));
}

export default function page({ params }: { params: { country: string } }) {
  // const router = useRouter();
  const country = params.country;
  const data: any = languagesData;

  const eachLanguagesData = data[country];
  // console.log(eachLanguagesData);

  const page = eachLanguagesData.page;
  // console.log(page);

  return (
    <div>
      <p>{country} hi</p>
      <p>{page?.b_sub3_description6}</p>
    </div>
  );
}
