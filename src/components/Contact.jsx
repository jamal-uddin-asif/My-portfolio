import Education from "./education";

export default function Contact() {
    return (
        <section id="contact" className="font-display">
            <div
                className="relative flex h-auto w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden"
            >
                <div
                    className="flex items-center p-4 pb-2 justify-between bg-background-light dark:bg-background-dark"
                >
                    <div
                        className="flex size-12 shrink-0 items-center text-zinc-900 dark:text-white"
                    ></div>
                    <h2
                        className="flex-1 text-lg font-bold leading-tight tracking-[-0.015em] text-zinc-900 dark:text-white"
                    ></h2>
                    <div className="flex size-12 shrink-0 items-center"></div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center p-4">
                    <div className="flex w-full max-w-md flex-col items-center">
                        <h1 className=" text-3xl text-primary mb-3">Contact me</h1>
                        <div className="flex w-full flex-col gap-2">
                            <a
                                href="mailto:asifzehendmg@gmail.com"
                                className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between rounded-xl bg-zinc-100 dark:bg-zinc-800/40 hover:bg-zinc-200 dark:hover:bg-zinc-700/40 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex items-center justify-center rounded-lg bg-primary/20 text-primary shrink-0 size-12"
                                    >
                                        <span className="material-symbols-outlined text-2xl"
                                        >mail</span
                                        >
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p
                                            className="text-base font-medium leading-normal line-clamp-1 text-zinc-900 dark:text-white"
                                        >
                                            Email
                                        </p>
                                        <p
                                            className="text-sm font-normal leading-normal line-clamp-2 text-zinc-500 dark:text-zinc-400"
                                        >
                                            asifzehendmg@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <div
                                        className="flex size-7 items-center justify-center text-zinc-500 dark:text-zinc-400"
                                    >
                                        <span className="material-symbols-outlined text-2xl"
                                        >chevron_right</span
                                        >
                                    </div>
                                </div>
                            </a>
                            <a
                                href="tel:01610990018"
                                className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between rounded-xl bg-zinc-100 dark:bg-zinc-800/40 hover:bg-zinc-200 dark:hover:bg-zinc-700/40 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex items-center justify-center rounded-lg bg-primary/20 text-primary shrink-0 size-12"
                                    >
                                        <span className="material-symbols-outlined text-2xl"
                                        >phone</span
                                        >
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p
                                            className="text-base font-medium leading-normal line-clamp-1 text-zinc-900 dark:text-white"
                                        >
                                            Phone
                                        </p>
                                        <p
                                            className="text-sm font-normal leading-normal line-clamp-2 text-zinc-500 dark:text-zinc-400"
                                        >
                                            01610990018
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <div
                                        className="flex size-7 items-center justify-center text-zinc-500 dark:text-zinc-400"
                                    >
                                        <span className="material-symbols-outlined text-2xl"
                                        >chevron_right</span
                                        >
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://wa.me/8801610990018"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between rounded-xl bg-zinc-100 dark:bg-zinc-800/40 hover:bg-zinc-200 dark:hover:bg-zinc-700/40 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex items-center justify-center rounded-lg bg-primary/20 text-primary shrink-0 size-12"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89C2.15 13.84 2.73 15.68 3.75 17.24L2.46 21.54L6.92 20.25C8.43 21.18 10.18 21.78 12.04 21.78C17.5 21.78 21.93 17.35 21.93 11.89C21.93 6.43 17.5 2 12.04 2ZM17.11 15.54C16.89 16.03 15.65 16.64 15.22 16.69C14.79 16.74 14.22 16.76 13.78 16.59C13.34 16.41 12.39 16.1 11.3 15.13C9.97 13.91 9.05 12.44 8.85 11.96C8.65 11.48 8.79 11.11 8.95 10.95C9.09 10.81 9.27 10.59 9.45 10.41C9.6 10.26 9.66 10.14 9.78 9.9C9.91 9.66 9.85 9.45 9.75 9.25C9.65 9.05 9.11 7.7 8.89 7.19C8.67 6.68 8.44 6.75 8.27 6.74C8.11 6.73 7.84 6.73 7.59 6.73C7.34 6.73 7.01 6.8 6.73 7.07C6.46 7.34 5.89 7.85 5.89 8.93C5.89 10.01 6.76 11.03 6.88 11.18C7 11.33 9.02 14.49 12.07 15.86C14.13 16.78 15.1 16.66 15.75 16.6C16.42 16.52 17.33 16.12 17.55 15.63C17.77 15.14 17.77 14.76 17.7 14.63C17.63 14.5 17.43 14.41 17.21 14.31C16.99 14.21 16.12 13.78 15.9 13.7C15.68 13.62 15.53 13.58 15.38 13.82C15.23 14.06 14.88 14.48 14.76 14.63C14.64 14.78 14.52 14.82 14.3 14.74C14.08 14.66 13.25 14.39 12.23 13.48C11.41 12.75 10.84 11.85 10.66 11.53C10.48 11.21 10.63 11.05 10.77 10.91C10.9 10.79 11.04 10.64 11.18 10.49C11.32 10.34 11.37 10.23 11.47 10.03C11.57 9.83 11.52 9.65 11.45 9.53C11.38 9.41 10.87 8.16 10.67 7.68C10.47 7.2 10.27 7.25 10.12 7.24H10.11C10.11 7.24 9.93 7.24 9.77 7.24C9.61 7.24 9.38 7.28 9.21 7.42C9.03 7.56 8.52 8.01 8.52 8.53C8.52 9.05 8.7 9.55 8.84 9.77C8.98 9.99 9.21 10.33 9.21 10.35C9.21 10.37 9.35 10.59 9.35 10.59C9.35 10.59 9.75 11.2 9.85 11.3C9.95 11.4 10.77 12.38 11.96 13.29C12.56 13.75 13.31 14.18 13.88 14.43C14.28 14.61 14.64 14.7 14.94 14.7C15.26 14.7 16.33 14.16 16.5 13.56C16.67 12.96 16.69 12.21 16.69 12.11C16.69 11.99 16.69 11.83 16.89 11.83C17.09 11.83 17.11 12.9 17.11 13C17.11 13.1 17.11 15.05 17.11 15.54Z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p
                                            className="text-base font-medium leading-normal line-clamp-1 text-zinc-900 dark:text-white"
                                        >
                                            WhatsApp
                                        </p>
                                        <p
                                            className="text-sm font-normal leading-normal line-clamp-2 text-zinc-500 dark:text-zinc-400"
                                        >
                                            01610990018
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <div
                                        className="flex size-7 items-center justify-center text-zinc-500 dark:text-zinc-400"
                                    >
                                        <span className="material-symbols-outlined text-2xl"
                                        >chevron_right</span
                                        >
                                    </div>
                                </div>
                            </a>
                        </div>
                        <h4
                            className="py-6 text-sm font-bold leading-normal tracking-[0.015em] text-center text-zinc-500 dark:text-zinc-400"
                        >
                            Find me on
                        </h4>
                        <div className="flex items-center justify-center gap-6">
                            <a
                                className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800/40 dark:text-zinc-300"
                                href=""
                            >
                                <svg
                                    className="h-6 w-6"
                                    data-alt="LinkedIn logo"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.447 20.452H17.13V14.93C17.13 13.69 17.106 12.067 15.41 12.067C13.715 12.067 13.438 13.437 13.438 14.838V20.452H10.12V9.048H13.287V10.5H13.333C13.785 9.688 14.843 8.783 16.438 8.783C19.825 8.783 20.447 11.05 20.447 14.173V20.452ZM6.877 7.427C5.973 7.427 5.25 6.702 5.25 5.8C5.25 4.898 5.973 4.173 6.877 4.173C7.78 4.173 8.503 4.898 8.503 5.8C8.503 6.702 7.78 7.427 6.877 7.427ZM8.528 20.452H5.226V9.048H8.528V20.452ZM22.453 0H1.54C.688 0 0 .688 0 1.54V22.46C0 23.312.688 24 1.54 24H22.46C23.312 24 24 23.312 24 22.46V1.54C24 .688 23.312 0 22.453 0Z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800/40 dark:text-zinc-300"
                                href="https://github.com/jamal-uddin-asif"
                            >
                                <svg
                                    className="h-6 w-6"
                                    data-alt="GitHub logo"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                    ></path>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
