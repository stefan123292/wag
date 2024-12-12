import { FooterWrapper } from "./FooterStyles";

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <p>&copy; {currentYear} WagCoin. All Rights Reserved.</p>
            <p>
                Built with ❤️ for the community. <br />
                Follow us on{" "}
                <a href="https://x.com/WagCoin65476" target="_blank" rel="noopener noreferrer">
                    X
                </a>{" "}
                and{" "}
                <a href="https://t.me/+x6SX5geQaecyNGJi" target="_blank" rel="noopener noreferrer">
                    Telegram
                </a>
                .
            </p>
        </FooterWrapper>
    );
};

export default Copyright;
