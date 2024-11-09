import { Nav } from "./components/Navbar";

export function EnterpriseService() {
  const cards = [
    {
      title: "Basic 기본형",
      desc: "Free access for 2 members",
      price: ["30", "만원", "건당"],
      options: [
        {
          //   icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "온라인 지원",
        },
        {
          //   icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "전문 노무사 상담",
        },
        {
          //   icon: (
          //     <MinusCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "이슈 별 대응 가이드 제공",
        },
        {
          //   icon: (
          //     <MinusCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "40GB Cloud storage",
        },
        {
          //   icon: (
          //     <MinusCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "Support team full assist",
        },
      ],
    },
    {
      title: "Plus 구독형",
      desc: "Free access for 30 members",
      price: ["50", "만원", "월"],
      options: [
        {
          //   icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "모든 Basic 제공 서비스",
        },
        {
          //   icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "노무사 파견",
        },
        {
          //   icon: (
          //     <CheckCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "Integration help",
        },
        {
          //   icon: (
          //     <CheckCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "40GB Cloud storage",
        },
        {
          //   icon: (
          //     <MinusCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "TBB",
        },
      ],
    },
    {
      title: "Premium 구독형",
      desc: "Free access for 200 members",
      price: ["100", "만원", "월"],
      options: [
        {
          //   icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "모든 Plus 제공 서비스",
        },
        {
          //   icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "기업 노동 건전성 진단",
        },
        {
          //   icon: (
          //     <CheckCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "저성과자 코칭 프로그램",
        },
        {
          //   icon: (
          //     <CheckCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "40GB Cloud storage",
        },
        {
          //   icon: (
          //     <CheckCircleIcon
          //       strokeWidth={2.5}
          //       className="h-5 w-5 text-blue-gray-900"
          //     />
          //   ),
          info: "Support team full assist",
        },
      ],
    },
  ];

  return (
    <>
      <Nav />
      <section className="py-24 px-8">
        <div className="container mx-auto">
          <div className="mb-4 text-lg font-bold">서비스 요금</div>
          <div className="mb-4 text-2xl lg:text-4xl">
            회사 노동자간, 노사간 문제를 해결해드립니다.
          </div>
          <div className="mb-10 text-gray-500 font-normal max-w-xl">
            그간 직접 처리하기 어렵거나 회사에서 직접적으로 주도 하기 어려운
            이슈(폭언, 갑질) 등 방법을 알지 못하여 어려웠던 문제들을 저희에게
            맡겨주세요.
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {cards.map(({ title, desc, options, price }, key) => (
              <PricingCard
                key={key}
                title={title}
                desc={desc}
                price={price}
                options={options}
              />
            ))}
          </div>
          <div className="mt-10 text-gray-500 font-normal">
            환불, 이의제기는 한국 소비자원 지침을 따릅니다.
          </div>
        </div>
      </section>
    </>
  );
}

interface PricingCardPropsType {
  title: string;
  desc: string;
  price: string[];
  options: {
    info: string;
  }[];
}

function PricingCard({ title, desc, price, options }: PricingCardPropsType) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <div className="m-0 p-6 bg-white">
        <div className="capitalize font-bold mb-1 text-xl">{title}</div>
        <div className="font-normal text-gray-500">{desc}</div>
        <div className="mt-4 flex gap-1 text-4xl items-baseline">
          <span>{price[0]}</span>
          <span>{price[1]}</span>
          <span className="text-lg font-bold opacity-70">/{price[2]}</span>
        </div>
      </div>
      <div className="pt-0 bg-gray-50">
        <ul className="flex flex-col gap-3 mb-6 p-6">
          {options.map((option, key) => (
            <li key={key} className="flex items-center gap-3 text-gray-700">
              {/* {option.icon} */}
              <div className="font-normal text-inherit">{option.info}</div>
            </li>
          ))}
        </ul>
        <div className="p-6">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
