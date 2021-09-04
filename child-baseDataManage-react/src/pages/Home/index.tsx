
import IceContainer from '@icedesign/container';
import './index.scss'
import GlobalNav from '@/layouts/GlobalNav'
import ContentWrap from '@/layouts/ContentWrap'
export default function Home() {
    return (
        <IceContainer>
            <div className="wrap">
                <GlobalNav />
                <ContentWrap />
            </div>
        </IceContainer>
    );
}
