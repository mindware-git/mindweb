import { FormEvent, useEffect, useState } from "react";

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

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string[];
}) {
  return (
    <div className="p-4 bg-transparent shadow-lg rounded-lg w-fuil">
      <div className="p-4 px-32">
        <div className="p-4">{title}</div>
        {description.map((desc, index) => (
          <p key={index} className="text-gray-700">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}

function Subscribe() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    // const formData = new FormData(form);
    //     // You can pass formData as a fetch body directly:
    //     fetch("/some-api", { method: form.method, body: formData });
    //     // Or you can work with it as a plain object:
    //     const formJson = Object.fromEntries(formData.entries());
    //     console.log(formJson);
    console.log("yahoo" + form);
  }
  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="flex items-center space-x-4"
    >
      <input
        defaultValue="이메일 주소"
        onFocus={(e) => (e.target.value = "")}
        className="min-w-80 appearance-none bg-transparent border-2 border-gray-200 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-150 ease-in-out"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
      >
        가입
      </button>
    </form>
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
        <div className="flex flex-wrap justify-center text-2xl py-8">
          <FeatureCard
            title="법률 챗봇"
            description={[
              "노무사를 만나기전 무료로 이용해보세요.",
              "필요한 과정을 이해하고 준비할 수 있도록 도와드립니다.",
            ]}
          />
          <FeatureCard
            title="비공개 노조"
            description={[
              "회사에 불이익을 받을까 두려우신가요?",
              "노조에서도 신원을 알 수 없도록 모든 정보는 보호됩니다.",
              "5인 이하 사업장이나 프리랜서들도 권익을 보호 받으세요.",
            ]}
          />
          <FeatureCard
            title="온라인 노조"
            description={[
              "복잡한 서류작업은 저희에게 맡겨주세요.",
              "노조 설립, 병합, 가입 모든 필요한 기능을 편리하게",
              "이미 가입되어있는 많은 노조들과 쉽게 협업도 가능합니다.",
            ]}
          />
          <FeatureCard
            title="기업 컨설팅"
            description={[
              "노동자간 이슈가 발생하셨나요?",
              "성희롱, 폭언 등 분쟁으로 부터 노동자, 회사를 위한 가이드를 제공해드립니다.",
            ]}
          />
        </div>
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
