import Navbar from '../Components/Navbar'
import quicktrack from '../Icons/quicktrack.svg'

function Info() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center pt-2">
                <div className="w-96">
                    <img src={quicktrack} className="w-40 h-40" alt="" />
                    <h2 className="text-4xl">Quicktrack Lite</h2>
                    <h3 className="text-2xl text-gray-500">
                        Made with React, React Router and Tailwindcss.
                    </h3>
                    <p className="pt-5">
                        This is my first project in react. This is also the
                        first time I used tailwindcss. tailwindcss is awesome! I
                        was able to patch up a impressive looking website in
                        under an hour. I did not know I can do css before.
                    </p>

                    <p className="pt-5">
                        React IMO is harder is use. Vue&apos;s reactivity is
                        easier to grasp compared to React&apos;s immutability.
                        Each component rerenders by calling the function again
                        which sounds great but it&apos;s harder to wrap my head
                        around the script setup function that Vue implements.
                    </p>
                    <p className="pt-5">
                        JSX is relatively easy to grasp but template function
                        just looks <i>easier</i>, you know? Instead of mixing
                        Javascript with HTML I think it&apos;s better to just
                        attach words to html tags instead.
                    </p>
                    <p className="pt-5">
                        Things are especially hard with Global state. In Vue it
                        could be done via simple
                        <code className="px-2">const state = reactive</code>
                        on a composable but for React it&apos;s much more hands
                        tied.
                    </p>
                    <p className="pt-5">
                        One thing good about react is that just about everything
                        is fleshed out. Material UI? Check. SSR/SSG Framework?
                        NextJS. We only have a out of date Vuetify and a
                        bleeding-edge NuxtJS over here.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Info
