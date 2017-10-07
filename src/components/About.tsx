import { BasePage } from './BasePage';
import * as React from 'react';
import { PageHeader } from 'react-bootstrap';

export interface IAboutProps {
    page: 'team' | 'profile' | 'contact';
}

export interface IAboutState {

}

export class About extends React.PureComponent<IAboutProps, IAboutState> {

    refs: {
        team: HTMLDivElement;
        contact: HTMLDivElement;
        profile: HTMLDivElement;
    }

    scrollToPage = () => {
        const {refs: {team, contact, profile}, props: {page}} = this;
        const currentPage = page === 'profile' ? profile : (page === 'team' ? team : contact);
        document.body.scrollTop = currentPage.offsetTop
    }

    componentDidMount() {
        this.scrollToPage();
    }

    componentDidUpdate() {
        this.scrollToPage();
    }

    render() {
        return (
            <BasePage>
                <div className="profile" ref="profile">
                    <PageHeader>Profile</PageHeader>
                    {text}
                </div>
                <div className="team" ref="team">
                    <PageHeader>Team</PageHeader>
                    {text}
                </div>
                <div className="contact" ref="contact">
                    <PageHeader>Contact</PageHeader>
                    {text}
                </div>

            </BasePage>
        );
    }
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa. Enim blandit volutpat maecenas volutpat blandit. Facilisis gravida neque convallis a. Ut placerat orci nulla pellentesque dignissim enim sit amet. Enim eu turpis egestas pretium aenean pharetra magna ac. Mattis enim ut tellus elementum. A arcu cursus vitae congue mauris rhoncus aenean vel. Ipsum consequat nisl vel pretium lectus quam id leo in. Facilisis mauris sit amet massa vitae tortor condimentum. Egestas tellus rutrum tellus pellentesque eu. Ultrices vitae auctor eu augue. Integer feugiat scelerisque varius morbi enim nunc faucibus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Integer eget aliquet nibh praesent tristique magna sit. Placerat in egestas erat imperdiet sed euismod nisi. At consectetur lorem donec massa. Nisi scelerisque eu ultrices vitae. Urna duis convallis convallis tellus id. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Lacus suspendisse faucibus interdum posuere lorem ipsum. Tortor id aliquet lectus proin nibh nisl condimentum. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Quis auctor elit sed vulputate. Id ornare arcu odio ut. Magna eget est lorem ipsum dolor sit. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Proin libero nunc consequat interdum varius sit. Id porta nibh venenatis cras sed felis. Libero volutpat sed cras ornare arcu dui vivamus. Fermentum et sollicitudin ac orci phasellus egestas.

Eget egestas purus viverra accumsan in nisl. Faucibus vitae aliquet nec ullamcorper sit amet. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Non curabitur gravida arcu ac tortor dignissim. At volutpat diam ut venenatis tellus in metus. Auctor neque vitae tempus quam pellentesque nec. Nisl vel pretium lectus quam id leo in vitae. Scelerisque varius morbi enim nunc faucibus. Integer vitae justo eget magna fermentum iaculis eu. At augue eget arcu dictum varius duis at. Faucibus et molestie ac feugiat sed. Justo laoreet sit amet cursus sit amet. Accumsan tortor posuere ac ut consequat semper viverra nam. Quis vel eros donec ac odio tempor orci dapibus. Velit scelerisque in dictum non.

At risus viverra adipiscing at. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Est ultricies integer quis auctor elit sed vulputate. Facilisis leo vel fringilla est ullamcorper eget. Risus in hendrerit gravida rutrum quisque non tellus orci. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Porttitor leo a diam sollicitudin tempor id eu nisl. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Cras semper auctor neque vitae. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.

Odio ut sem nulla pharetra diam sit amet. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Vitae ultricies leo integer malesuada nunc vel risus commodo. Enim nulla aliquet porttitor lacus. Pellentesque habitant morbi tristique senectus et. Nunc lobortis mattis aliquam faucibus purus in massa. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Tellus integer feugiat scelerisque varius morbi enim. Volutpat commodo sed egestas egestas fringilla.

Arcu cursus euismod quis viverra nibh cras. Amet tellus cras adipiscing enim eu. Posuere lorem ipsum dolor sit amet. Lectus mauris ultrices eros in. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Morbi non arcu risus quis. Tristique senectus et netus et. Et netus et malesuada fames ac turpis egestas integer eget. Pulvinar mattis nunc sed blandit libero volutpat. Suspendisse sed nisi lacus sed viverra tellus in hac. Mi sit amet mauris commodo quis. Justo laoreet sit amet cursus sit amet dictum sit amet. Morbi tempus iaculis urna id volutpat. Tristique nulla aliquet enim tortor at auctor urna. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Velit scelerisque in dictum non. Velit aliquet sagittis id consectetur purus ut faucibus. In massa tempor nec feugiat nisl pretium. Condimentum id venenatis a condimentum.

Tellus pellentesque eu tincidunt tortor aliquam nulla. At consectetur lorem donec massa. Mauris vitae ultricies leo integer malesuada nunc. Lacus sed turpis tincidunt id. Egestas dui id ornare arcu. At quis risus sed vulputate odio. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Sed libero enim sed faucibus turpis in eu. Nulla facilisi etiam dignissim diam quis. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Cras sed felis eget velit aliquet sagittis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Fringilla est ullamcorper eget nulla facilisi. Arcu odio ut sem nulla pharetra diam sit amet. Enim tortor at auctor urna nunc. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Pellentesque habitant morbi tristique senectus et. Aliquet bibendum enim facilisis gravida neque convallis. Varius morbi enim nunc faucibus a pellentesque sit amet.

Massa sapien faucibus et molestie ac feugiat sed lectus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Enim nulla aliquet porttitor lacus. Nulla pellentesque dignissim enim sit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Gravida neque convallis a cras semper auctor neque vitae. Enim eu turpis egestas pretium aenean pharetra magna. Duis ut diam quam nulla. Iaculis urna id volutpat lacus. Eget aliquet nibh praesent tristique magna sit amet purus. Urna id volutpat lacus laoreet non. Sagittis aliquam malesuada bibendum arcu vitae elementum. Odio ut sem nulla pharetra. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Massa placerat duis ultricies lacus sed turpis tincidunt.`