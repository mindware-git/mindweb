export function Subscribe() {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      onClick={() =>
        window.open("https://wkup.beehiiv.com/subscribe", "_blank")
      }
    >
      최신 소식 알림 받기
    </button>
  );
}
