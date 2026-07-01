import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/three23-logo.png"
            alt="Three23 Sports"
            width={706}
            height={234}
            className="h-12 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            A sports ministry building athletes in body, character, and faith.
          </p>
          <p className="mt-4 text-sm font-semibold text-carolina">
            &ldquo;Whatever you do, work at it with all your heart, as working
            for the Lord.&rdquo;
          </p>
          <p className="text-xs text-paper/60">— Colossians 3:23</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-paper/80">
            Sports
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li><Link href="/recreation/basketball" className="hover:text-pink">Basketball</Link></li>
            <li><Link href="/recreation/flag-football" className="hover:text-pink">Flag Football</Link></li>
            <li><Link href="/travel/baseball" className="hover:text-pink">Baseball</Link></li>
            <li><Link href="/travel/volleyball" className="hover:text-pink">Volleyball</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-paper/80">
            Ministry
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li><Link href="/about" className="hover:text-pink">About Us</Link></li>
            <li><Link href="/giving" className="hover:text-pink">Give</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-paper/80">
            Connect
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li>Email: contact@THREE23.org</li>
            <li>Phone: 770-957-1355</li>
            <li>2400 Highway 42 North, McDonough, GA 30253</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 py-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} Three23 Sports Ministry. All rights reserved.
      </div>
    </footer>
  );
}
