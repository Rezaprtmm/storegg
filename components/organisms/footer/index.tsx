import FooterItem from "@/components/molecules/FooterItem";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="" className="mb-30" legacyBehavior>
                <a>
                  <Image
                    src="/icon/logo.svg"
                    width={60}
                    height={60}
                    alt={"logo"}
                  />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <FooterItem title="About Us" href="/" />
                    <FooterItem title="Press Release" href="/" />
                    <FooterItem title="Term of Use" href="/" />
                    <FooterItem title="Privacy & Policy" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <FooterItem title="Refund Policy" href="/" />
                    <FooterItem title="Unlock Rewards" href="/" />
                    <FooterItem title="Live Chatting" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <FooterItem
                      title="hi@store.gg"
                      href="mailto: hi@store.gg"
                    />
                    <FooterItem
                      title="team@store.gg"
                      href="mailto: team@store.gg"
                    />
                    <FooterItem
                      title="Pasific 12, Jakarta Selatan"
                      href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                    />
                    <FooterItem
                      title="021 - 1122 - 9090"
                      href="tel: 02111229090"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
