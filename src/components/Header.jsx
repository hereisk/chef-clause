import chefClaudeLogo from "../assets/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="chef Claude logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}