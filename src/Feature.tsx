const featureCardsData = [
    {
        title: "법률 챗봇",
        description: [
            "노무사를 만나기전 무료로 이용해보세요.",
            "필요한 과정을 이해하고 준비할 수 있도록 도와드립니다.",
        ],
    },
    {
        title: "비공개 노조",
        description: [
            "회사에 불이익을 받을까 두려우신가요?",
            "노조에서도 신원을 알 수 없도록 모든 정보는 보호됩니다.",
            "5인 이하 사업장이나 프리랜서들도 권익을 보호 받으세요.",
        ],
    },
    {
        title: "온라인 노조",
        description: [
            "복잡한 서류작업은 저희에게 맡겨주세요.",
            "노조 설립, 병합, 가입 모든 필요한 기능을 편리하게",
            "이미 가입되어있는 많은 노조들과 쉽게 협업도 가능합니다.",
        ],
    },
    {
        title: "기업 컨설팅",
        description: [
            "노동자간 이슈가 발생하셨나요?",
            "성희롱, 폭언 등 분쟁으로 부터 노동자, 회사를 위한 가이드를 제공해드립니다.",
        ],
    },
];

function FeatureCard({
    title,
    description,
}: {
    title: string;
    description: string[];
}) {
    return (
        <div className="bg-white shadow-lg rounded-lg w-64 m-4">
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                {description.map((desc, index) => (
                    <p key={index} className="text-gray-700 mb-2">
                        {desc}
                    </p>
                ))}
            </div>
        </div>
    );
}

export function FeatureCards() {
    return (
        <div className="flex flex-wrap justify-center py-8">
            {featureCardsData.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
        </div>
    );
}