import { FooterWrapper } from "./FooterStyles";

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <p>&copy; {currentYear} GalaxyWen. All Rights Reserved.</p>
            <p>
                Built with ❤️ for the community. <br />
                Follow us on{" "}
                <a href="https://x.com/WenGalaxyCoin" target="_blank" rel="noopener noreferrer">
                    X
                </a>{" "}
                and{" "}
                <a href="https://t.me/+uMIbwKhA4XZmMmNi" target="_blank" rel="noopener noreferrer">
                    Telegram
                </a>
                .
            </p>
        </FooterWrapper>
    );
};

export default Copyright;
