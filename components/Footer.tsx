import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <section className="wrapper flex-col my-20">
      <section className="border-b flex gap-20 py-20">
        <article className="flex flex-col gap-8 w-full">
          <h3>QuackStore</h3>
          <p className="text-granite-gray">
            Our shop is the best choice for buying footwear.
          </p>
        </article>
        <article className="flex flex-col gap-2 w-full text-granite-gray">
          <h5 className="text-primary font-semibold">Home</h5>
          <Link href="/" passHref>
            <a href="replace">Support Center</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Customer Support</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Copyright</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Popular Campaign</a>
          </Link>
        </article>
        <article className="w-full flex flex-col gap-2 text-granite-gray">
          <h5 className="text-primary font-semibold">Our Information</h5>
          <Link href="/" passHref>
            <a href="replace">Return Policy</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Privacy Policy</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Terms and Conditions</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Site Map</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Store Hours</a>
          </Link>
        </article>
        <article className="w-full flex flex-col gap-2 text-granite-gray">
          <h5 className="text-primary font-semibold">My Account</h5>
          <Link href="/" passHref>
            <a href="replace">Press Inquiries</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Social Media Directories</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Permission</a>
          </Link>
          <Link href="/" passHref>
            <a href="replace">Requests</a>
          </Link>
        </article>
      </section>
      <p>© 2021 QuackStore.</p>
    </section>
  );
};

export default Footer;
