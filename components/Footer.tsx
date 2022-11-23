import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <section className="wrapper flex-col my-20">
      <div className="border-b flex gap-20 py-20">
        <article className="flex flex-col gap-8 w-full">
          <h3>QuackStore</h3>
          <p className="text-granite-gray">
            Our shop is the best choice for buying footwear.
          </p>
        </article>
        <article className="flex flex-col gap-2 w-full text-granite-gray">
          <h5 className="text-primary font-semibold">Home</h5>
          <Link href="/" passHref>
            Support Center
          </Link>
          <Link href="/" passHref>
            Customer Support
          </Link>
          <Link href="/" passHref>
            Copyright
          </Link>
          <Link href="/" passHref>
            Popular Campaign
          </Link>
        </article>
        <article className="w-full flex flex-col gap-2 text-granite-gray">
          <h5 className="text-primary font-semibold">Our Information</h5>
          <Link href="/" passHref>
            Return Policy
          </Link>
          <Link href="/" passHref>
            Privacy Policy
          </Link>
          <Link href="/" passHref>
            Terms and Conditions
          </Link>
          <Link href="/" passHref>
            Site Map
          </Link>
          <Link href="/" passHref>
            Store Hours
          </Link>
        </article>
        <article className="w-full flex flex-col gap-2 text-granite-gray">
          <h5 className="text-primary font-semibold">My Account</h5>
          <Link href="/" passHref>
            Press Inquiries
          </Link>
          <Link href="/" passHref>
            Social Media Directories
          </Link>
          <Link href="/" passHref>
            Permission
          </Link>
          <Link href="/" passHref>
            Requests
          </Link>
        </article>
      </div>
      <p>© 2022 QuackStore.</p>
    </section>
  );
};

export default Footer;
