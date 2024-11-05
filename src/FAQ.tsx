import React, { useState } from "react";

export function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="p-8">
      <h2 className="p-4">FAQ</h2>
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h3 className="cursor-pointer" onClick={() => toggleFAQ(0)}>
          회사 입장에서 노동조합이 증가하면 안좋은 것 아닌가요?
        </h3>
        {expandedFAQ === 0 && (
          <div className="pl-4">
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
        )}
      </div>
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h3 className="cursor-pointer" onClick={() => toggleFAQ(1)}>
          기존 노조 입장에서는 별다른 이득이 없을 것 같은데요?
        </h3>
        {expandedFAQ === 1 && (
          <div className="pl-4">
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
        )}
      </div>
    </div>
  );
}
