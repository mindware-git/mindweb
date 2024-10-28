import { useEffect, useState } from "react";
import { FeatureCards } from "./Feature";
import { Subscribe } from "./Subscribe";

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
        <h1 className="text-3xl py-8">Unione</h1>
        <p className="text-4xl py-8">
          유니원은 노동자의 권익 향상을 목표로 하는 노동조합 플랫폼입니다.
        </p>
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
        <div className="px-8">유니원에 대한 뉴스 및 업데이트 받아보기</div>
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
      <div>
        <h2>FAQ</h2>
        <div>
          <h3>회사 입장에서 노동조합이 증가하면 안좋은 것 아닌가요?</h3>
          <p>전혀 사실과 다르며 오히려 반대입니다.</p>
          <p>
            노동조합은 노동자 권익을 위해 존재하며, 업무 성과 판단은 전적으로
            회사의 재량입니다.
          </p>
          <p>
            유니원은 노동자는 인권, 인격적으로 존중받고 오직 일로만 평가 되는
            환경을 만들고 싶습니다.
          </p>
        </div>
        <div>
          <h3>기존 노조 입장에서는 별다른 이득이 없을 것 같은데요?</h3>
          <p>
            노조의 온라인화로 집행 절차가 투명해지고, 노조원의 신뢰를 얻을 수
            있습니다.
          </p>
          <p>또한 대부분의 노조들은 비슷한 문제를 직면하고 어려워합니다.</p>
          <p>
            유니원에서는 다른 노조들의 행적을 쉽게 볼 수 있고 함께 나아갈 수
            있습니다.
          </p>
        </div>
      </div>
      All rights are reserved by Mindware Inc.
    </>
  );
}

export default App;
