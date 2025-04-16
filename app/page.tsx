import Header from "@/app/components/Header";
import UrlShortenerForm from "@/app/components/UrlShortenerForm";

export default function Home() {
  return (
    <div className = "page-wrapper">
      <Header/>
      <UrlShortenerForm/>
    </div>
  );
}
