import Link from "next/link"
import { Mail, Twitter, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-card border-t border-foreground/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-background text-lg font-serif font-bold">S</span>
              </div>
              <span className="text-lg font-serif font-bold text-foreground">SoundScape</span>
            </div>
            <p className="text-foreground/60 text-sm">Transform your music into immersive worlds</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground/50 text-sm">© 2025 SoundScape. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-background transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-background transition"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-background transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@soundscape.app"
              className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-background transition"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2 rounded-lg bg-background border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
            />
            <button className="px-4 py-2 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
