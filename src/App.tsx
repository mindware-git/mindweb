import { useEffect, useState } from "react";
import { FeatureCards } from "./Feature";
import { Subscribe } from "./Subscribe";
import { FAQ } from "./FAQ";

function SvgInline({ url }: { url: string }) {
  const [svg, setSvg] = useState<string | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isErrored, setIsErrored] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setSvg)
      .catch(() => setIsErrored(true))
      .finally(() => setIsLoaded(true));
  }, [url]);

  return (
    <div
      className={`svgInline svgInline--${isLoaded ? "loaded" : "loading"} ${
        isErrored ? "svgInline--errored" : ""
      }`}
      dangerouslySetInnerHTML={{ __html: svg || "" }}
    />
  );
}

function App() {
  return (
    <>
      <div className="text-center py-16">
        <h1 className="text-4xl py-8">Unione</h1>
        <h2 className="text-3xl py-8 md:text-5xl lg:text-6xl">
          <p>유니원은 노동자의 권익 향상을</p>
          <p>목표로 하는 노동조합 플랫폼입니다</p>
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#register"
          className="flex items-center justify-center space-x-4"
        >
          <SvgInline url="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
        </a>
      </div>
      <div className="text-center py-8">
        <h2 className="text-3xl py-8">핵심 기능</h2>
        <FeatureCards />
      </div>
      <div id="register" className="flex flex-wrap text-slate-500 p-8">
        <div className="py-8 pr-8">유니원에 대한 뉴스 및 업데이트 받아보기</div>
        <div>
          <Subscribe />
          <div className="py-8">
            <p>
              유니원의 기존 및 향후 제품과 서비스에 관한 업데이트와 마케팅
              메시지를 수신하는 데 동의하게 됩니다.
            </p>
            <p>
              언제든지 메시지에 포함된 수신 거부 링크를 클릭하여 동의를 취소하고
              수신 거부할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 w-full p-8"></div>
      <FAQ />
      <div className="text-center text-gray-500 py-4">
        All rights are reserved by Mindware Inc.
      </div>
    </>
  );
}

export default App;
