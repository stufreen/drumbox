const sampleOptions = [
  {
    name: '707 Bass',
    url: require('./assets/drums/707/707-bd.mp3'),
  },
  {
    name: '707 Snare (low)',
    url: require('./assets/drums/707/707-sd-low.mp3'),
  },
  {
    name: '707 Snare (high)',
    url: require('./assets/drums/707/707-sd-high.mp3'),
  },
  {
    name: '707 Hi-hat Closed',
    url: require('./assets/drums/707/707-ch.mp3'),
  },
  {
    name: '707 Hi-hat Open',
    url: require('./assets/drums/707/707-oh.mp3'),
  },
  {
    name: '707 Clap',
    url: require('./assets/drums/707/707-clap.mp3'),
  },
  {
    name: '707 Tambourine',
    url: require('./assets/drums/707/707-tamb.mp3'),
  },
  {
    name: '808 Bass Short',
    url: require('./assets/drums/808/808-bd-short.mp3'),
  },
  {
    name: '808 Bass Long',
    url: require('./assets/drums/808/808-bd-long.mp3'),
  },
  {
    name: '808 Cowbell',
    url: require('./assets/drums/808/808-cowbell.mp3'),
  },
  {
    name: '808 Snare',
    url: require('./assets/drums/808/808-sd.mp3'),
  },
  {
    name: '808 Clap',
    url: require('./assets/drums/808/808-clap.mp3'),
  },
  {
    name: '808 Hi-hat Closed',
    url: require('./assets/drums/808/808-ch.mp3'),
  },
  {
    name: '808 Hi-hat Open',
    url: require('./assets/drums/808/808-oh.mp3'),
  },
  {
    name: '808 Cymbal',
    url: require('./assets/drums/808/808-cym.mp3'),
  },
  {
    name: '808 Clave',
    url: require('./assets/drums/808/808-clav.mp3'),
  },
  {
    name: '808 Rimshot',
    url: require('./assets/drums/808/808-rs.mp3'),
  },
  {
    name: '808 High Tom',
    url: require('./assets/drums/808/808-ht.mp3'),
  },
  {
    name: '808 Mid Tom',
    url: require('./assets/drums/808/808-mt.mp3'),
  },
  {
    name: '808 Low Tom',
    url: require('./assets/drums/808/808-lt.mp3'),
  },
  {
    name: 'Acetone Bass',
    url: require('./assets/drums/acetone/acetone-bd.mp3'),
  },
  {
    name: 'Acetone Snare (Short)',
    url: require('./assets/drums/acetone/acetone-sd-1.mp3'),
  },
  {
    name: 'Acetone Snare (Long)',
    url: require('./assets/drums/acetone/acetone-sd-2.mp3'),
  },
  {
    name: 'Acetone Hi-hat Closed',
    url: require('./assets/drums/acetone/acetone-ch.mp3'),
  },
  {
    name: 'Acetone Hi-hat Open',
    url: require('./assets/drums/acetone/acetone-oh.mp3'),
  },
  {
    name: 'Acetone Percussion (Low)',
    url: require('./assets/drums/acetone/acetone-perc-1.mp3'),
  },
  {
    name: 'Acetone Percussion (High)',
    url: require('./assets/drums/acetone/acetone-perc-2.mp3'),
  },
  {
    name: 'LinnDrum Bass',
    url: require('./assets/drums/linndrum/linn-bd.mp3'),
  },
  {
    name: 'LinnDrum Snare',
    url: require('./assets/drums/linndrum/linn-sd.mp3'),
  },
  {
    name: 'LinnDrum Hi-hat Closed',
    url: require('./assets/drums/linndrum/linn-ch.mp3'),
  },
  {
    name: 'LinnDrum Hi-hat Pressed',
    url: require('./assets/drums/linndrum/linn-ph.mp3'),
  },
  {
    name: 'LinnDrum Clap',
    url: require('./assets/drums/linndrum/linn-clap.mp3'),
  },
  {
    name: 'LinnDrum Tambourine',
    url: require('./assets/drums/linndrum/linn-tamb.mp3'),
  },
  {
    name: 'LinnDrum Cowbell',
    url: require('./assets/drums/linndrum/linn-cowbell.mp3'),
  },
  {
    name: 'LinnDrum High Tom',
    url: require('./assets/drums/linndrum/linn-ht.mp3'),
  },
  {
    name: 'LinnDrum Mid Tom',
    url: require('./assets/drums/linndrum/linn-mt.mp3'),
  },
  {
    name: 'LinnDrum Low Tom',
    url: require('./assets/drums/linndrum/linn-lt.mp3'),
  },
  {
    name: 'LinnDrum Rimshot',
    url: require('./assets/drums/linndrum/linn-rim.mp3'),
  },
  {
    name: 'Hip Hop Bass 1',
    url: require('./assets/drums/hip-hop/hip-hop-bd-1.mp3'),
  },
  {
    name: 'Hip Hop Bass 2',
    url: require('./assets/drums/hip-hop/hip-hop-bd-2.mp3'),
  },
  {
    name: 'Hip Hop Snare 1',
    url: require('./assets/drums/hip-hop/hip-hop-sd-1.mp3'),
  },
  {
    name: 'Hip Hop Snare 2',
    url: require('./assets/drums/hip-hop/hip-hop-sd-2.mp3'),
  },
  {
    name: 'Hip Hop Hi-hat Closed 1',
    url: require('./assets/drums/hip-hop/hip-hop-ch-1.mp3'),
  },
  {
    name: 'Hip Hop Hi-hat Closed 2',
    url: require('./assets/drums/hip-hop/hip-hop-ch-2.mp3'),
  },
  {
    name: 'Hip Hop Hi-hat Open',
    url: require('./assets/drums/hip-hop/hip-hop-oh.mp3'),
  },
];

export default sampleOptions;

export const getSampleSelectOptions = () => {
  const allOptions = sampleOptions.map(sampleOption => ({
    value: sampleOption.url,
    label: sampleOption.name,
  }));
  const groupedOptions = [
    {
      label: 'Roland 707',
      options: allOptions.filter(item => item.label.includes('707')),
    },
    {
      label: 'Roland 808',
      options: allOptions.filter(item => item.label.includes('808')),
    },
    {
      label: 'Ace Tone Rhythm Ace',
      options: allOptions.filter(item => item.label.includes('Acetone')),
    },
    {
      label: 'Linn LinnDrum',
      options: allOptions.filter(item => item.label.includes('LinnDrum')),
    },
    {
      label: 'Hip-hop',
      options: allOptions.filter(item => item.label.includes('Hip Hop')),
    },
  ];
  return groupedOptions;
};
