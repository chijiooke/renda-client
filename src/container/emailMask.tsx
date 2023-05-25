import React from "react";

interface EmailMaskProps {
  email: string;
  maskCharacter?: string;
  maskDomain?: boolean;
}

const VISIBLE_USERNAME_LENGTH = 2;
const VISIBLE_DOMAIN_LENGTH = 2;

const EmailMask: React.FC<EmailMaskProps> = ({
  email = "example@email.com",
  maskCharacter = "*",
  maskDomain = false,
}) => {
  if (email) {
    const [username, domain] = email?.split("@");
    const [domainName, topLevelDomain] = domain?.split(".");

    const visibleUsernameLength = Math.min(
      VISIBLE_USERNAME_LENGTH,
      username.length
    );
    const maskedUsername =
      username.slice(0, visibleUsernameLength) +
      maskCharacter.repeat(username.length - visibleUsernameLength);

    const visibleDomainLength = Math.min(
      VISIBLE_DOMAIN_LENGTH,
      domainName.length
    );
    const maskedDomainName =
      domainName.slice(0, visibleDomainLength) +
      maskCharacter.repeat(domainName.length - visibleDomainLength);
    const maskedDomain = `${maskedDomainName}.${topLevelDomain}`;

    const maskedEmail = maskDomain
      ? `${maskedUsername}@${maskedDomain}`
      : `${maskedUsername}@${domain}`;

    return <span>{maskedEmail}</span>;
  }
  return <span>''</span>;
};

export { EmailMask };
