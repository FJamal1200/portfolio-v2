const projects = [
  {
    number: "01",
    title: "ReconPilot",
    description:
      "Python reconnaissance automation tool for authorized lab and CTF environments. Validates targets, resolves DNS, runs full TCP sweeps with Nmap, parses open ports, and launches service-specific SMB or HTTP enumeration.",
    tags: ["Python", "Nmap", "Networking", "Automation"],
    url: "https://github.com/FJamal1200/ReconPilot",
  },
  {
    number: "02",
    title: "Canada Public Accounts Dashboard",
    description:
      "Interactive Streamlit dashboard for exploring Canadian Public Accounts transfer-payment data, including spending trends, organization filtering, expenditure-versus-authority comparisons, and downloadable tables.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    url: "https://github.com/FJamal1200/canada-public-accounts-dashboard",
    demo: "https://canada-public-spending-dashboard.streamlit.app/",
  },
  {
    number: "03",
    title: "YouTube Comment Spam Detector",
    description:
      "PyTorch text-classification app for detecting spam-like YouTube comments. Supports single-comment and CSV batch predictions, spam probabilities, and basic visualizations through a Streamlit interface.",
    tags: ["Python", "PyTorch", "Streamlit", "Scikit-learn"],
    url: "https://github.com/FJamal1200/YoutubeSpamDetector",
  },
];

export default projects;