import '../App.css'
function Navbar() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Favorite', href: '/favorite' },
    // { label: 'Favorites', href: '/favorites' },
    { label: 'Settings', href: '/settings' },
  ]

  return (
    <aside className="fixed top-0 left-0 z-50 h-screen w-64 overflow-y-auto bg-slate-950 px-6 py-8 text-slate-100 shadow-2xl shadow-slate-950/40">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-lg font-bold text-slate-950">
          M
        </div>
        <div>
          <p className="text-xl font-semibold tracking-tight">MovieFlow</p>
          <p className="text-sm text-slate-400">Cinema sidebar</p>
        </div>
      </div>

      <div className="mb-4 text-xs uppercase tracking-[0.22em] text-slate-500">
        Quick links
      </div>

      <nav className="space-y-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-800 hover:text-sky-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
        <p className="text-sm font-semibold text-slate-200">Need inspiration?</p>
        <p className="mt-2 text-sm text-slate-400">
          Use the sidebar to jump between movie sections and keep the UI visible while you browse.
        </p>
      </div> */}
    </aside>
  )
}
export default Navbar
