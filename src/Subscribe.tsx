import { FormEvent, useState } from "react";

export function Subscribe() {
  const [message, setMessage] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.currentTarget;
    setMessage("구독 중...");

    const API_URL =
      "http://" +
      process.env.REACT_APP_SERVER_IP +
      ":8000/api/v1/marketing/subscriptions";
    const formData = new FormData(form);

    fetch(API_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          if (response.status === 400) setMessage("구독에 실패했습니다.");
          else if (response.status === 201)
            setMessage("업데이트를 받아보기 위한 설정이 완료되었습니다!");
          else setMessage("구독에 실패했습니다.");
        } else {
          setMessage("구독에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage("죄송합니다. 문제가 발생했습니다.");
      });
  }
  return (
    <div>
      {message ? (
        <div className="text-red-500">{message}</div>
      ) : (
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex items-center space-x-4"
        >
          <input
            name="email"
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
      )}
    </div>
  );
}
