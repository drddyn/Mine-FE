import LandingPageFifth from './LandingPageFifth'
import LandingPageFirst from './LandingPageFirst'
import LandingPageFourth from './LandingPageFourth'
import LandingPageSecond from './LandingPageSecond'
import LandingPageSeventh from './LandingPageSeventh'
import LandingPageSixth from './LandingPageSixth'
import LandingPageThird from './LandingPageThird'

export default function LandingPage() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <LandingPageFirst />
            <LandingPageSecond />
            <LandingPageThird />
            <LandingPageFourth />
            <LandingPageFifth />
            <LandingPageSixth />
            <LandingPageSeventh />
        </div>
    )
}
