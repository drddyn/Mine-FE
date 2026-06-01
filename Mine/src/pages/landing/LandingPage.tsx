import LandingPageFifth from './LandingPageFifth'
import LandingPagefirst from './LandingPagefirst'
import LandingPageForth from './LandingPageForth'
import LandingPageSecond from './LandingPageSecond'
import LandingPageSeventh from './LandingPageSeventh'
import LandingPageSixth from './LandingPageSixth'
import LandingPageThird from './LandingPageThird'

export default function LandingPage() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <LandingPagefirst />
            <LandingPageSecond />
            <LandingPageThird />
            <LandingPageForth />
            <LandingPageFifth />
            <LandingPageSixth />
            <LandingPageSeventh />
        </div>
    )
}
