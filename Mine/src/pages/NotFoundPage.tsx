export default function NotFoundPage() {
    return (
        <div className="relative w-screen h-screen bg-custom-gradient">
            <div className="absolute left-30 bottom-70">
                <div className="font-notoserif font-regular text-5xl text-gray-100 pb-2">404 :NOT FOUND</div>
                <div className="font-medium32 text-gray-100">페이지를 찾을 수 없습니다.</div>
                <div className="pt-2 font-medium20 text-gray-100">
                    입력하신 주소가 잘못되었거나 페이지가 이동 또는 삭제되었을 수 있습니다.
                </div>
            </div>
        </div>
    )
}
