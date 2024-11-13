import { Input } from '@/components';

function Header() {
  return (
    <header className="w-full h-20 flex items-center px-3 py-6">
      <div className="w-1/2 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="src/assets/icons/logo.svg" alt="logo" className="w-10" />
          <h1 className="scroll-m-20 font-extrabold tracking-tight text-3xl">
            Weather.io
          </h1>
        </div>
        <Input
          className="flex-1"
          placeholder="검색할 지역 이름을 입력하세요."
        />
      </div>
    </header>
  );
}

export { Header };
