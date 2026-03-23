export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-zinc-500 text-sm">
          Designed & Built by{" "}
          <a
            href="https://github.com/DrApkFile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-mono"
          >
            Aghaduno Kenelumchukwu
          </a>
        </p>
        <p className="text-zinc-400 text-[10px] mt-2 font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
